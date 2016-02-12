# -*- coding: utf-8 -*-
from django.conf.urls import url

urlpatterns = [
    url('', 'dajare_api.apps.client.views.index'),
]
