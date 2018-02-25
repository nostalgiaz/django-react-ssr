from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt

from spotify.views import index, add_track

urlpatterns = [
    url('^$', index, name='index'),
    url('^add-track$', csrf_exempt(add_track), name='add-track'),
]
