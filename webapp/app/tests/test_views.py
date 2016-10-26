from django.test import TestCase
from django.test import Client
from app.views import return_something_view

class ViewTestCase(TestCase):

    def test_main_view(self):
        c = Client()
        response = c.get('/')
        self.assertEqual(response.status_code, 200)
