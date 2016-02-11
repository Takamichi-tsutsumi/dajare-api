# -*- coding: utf-8 -*-

from rest_framework import serializers

from .models import User, Entry


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'email')  # APIとして出力したいフィールド


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ('title', 'body', 'created_at', 'status', 'author')
