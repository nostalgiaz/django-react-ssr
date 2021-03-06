import json
import os

from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render
from react.render import render_component

from spotipy import Spotify
from spotipy.oauth2 import SpotifyClientCredentials

from spotify.models import Track


def get_tracks():
    return [track.to_json() for track in Track.objects.all()]


def index(request):
    tracks = get_tracks()

    store = {'component': 'TrackBox.jsx'}
    store['props'] = {'tracks': tracks}

    rendered = render_component(
        os.path.join(settings.BASE_DIR, 'spotify/static/js/src/TrackBox.jsx'),
        {'tracks': tracks},
    )

    return render(request, 'index.html', dict(rendered=rendered, store=store))


def get_spotify_id(spotify_id) -> str:
    if 'open.spotify.com' in spotify_id:
        return spotify_id.split('/track/')[1].split('?')[0]

    if 'spotify:track' in spotify_id:
        return spotify_id.split(':')[-1]

    return spotify_id


def add_track(request):
    spotify_id = get_spotify_id(request.POST.get('spotifyId'))
    client_credentials_manager = SpotifyClientCredentials()
    spotify = Spotify(client_credentials_manager=client_credentials_manager)
    Track.objects.create(spotify_id=spotify_id, data=json.dumps(spotify.track(spotify_id)))

    return JsonResponse({'tracks': get_tracks()})


def delete_track(request):
    spotify_id = get_spotify_id(request.POST.get('spotifyId'))
    Track.objects.get(spotify_id=spotify_id).delete()

    return JsonResponse({'tracks': get_tracks()})
