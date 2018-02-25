from django.test import TestCase

from spotify.views import get_spotify_id


class GetSpotifyIdTestCase(TestCase):
    spotify_id = '0lsnF67FX2YOvyKe1nJcuC'

    def test_with_url(self):
        url = 'https://open.spotify.com/track/0lsnF67FX2YOvyKe1nJcuC?si=o9kkVrRrSmyetkjPW8nVHQ'
        assert get_spotify_id(url) == self.spotify_id

    def test_with_spotify(self):
        url = 'spotify:track:0lsnF67FX2YOvyKe1nJcuC'
        assert get_spotify_id(url) == self.spotify_id

    def test_with_id(self):
        assert get_spotify_id(self.spotify_id) == self.spotify_id
