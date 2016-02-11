from django.contrib import admin

from .models import User, Entry


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("name", "email")
    pass


@admin.register(Entry)
class Entry(admin.ModelAdmin):
    list_display = ("title", "status")
    pass
