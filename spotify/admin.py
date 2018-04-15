from django.contrib import admin

from spotify.models import Track


@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    pass
