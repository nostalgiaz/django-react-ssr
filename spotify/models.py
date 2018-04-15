import json

from django.db import models


class Track(models.Model):
    spotify_id = models.CharField(max_length=255)
    data = models.TextField()

    @staticmethod
    def get_artist(the_data):
        artist = None
        if the_data.get('artists') is not None:
            all_the_artists = the_data.get('artists')
            artist = {
                'name': all_the_artists[0].get('name'),
                'link': all_the_artists[0].get('external_urls', {}).get('spotify')
            }

        return artist

    def __str__(self):
        the_data = json.loads(self.data)
        artist = self.get_artist(the_data)
        return '{} [by {}]'.format(the_data.get('name'), artist['name'] if artist is not None else '-')

    def to_json(self):
        the_data = json.loads(self.data)
        artist = self.get_artist(the_data)

        return {
            'spotifyUrl': 'https://open.spotify.com/track/' + self.spotify_id,
            'spotifyId': self.spotify_id,
            'title': the_data['name'],
            'artist': artist,
            'cover': the_data['album']['images'][0]['url'],
        }
