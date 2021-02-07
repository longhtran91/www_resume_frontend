import unittest
import requests

class TestApiGateway(unittest.TestCase):
    def test_website_url(self):
        url = 'https://resume.lhtran.com'
        with requests.Session() as s:
            response = s.get(url, headers={'Connection':'close'})
        self.assertEqual(200, response.status_code)

if __name__ == '__main__':
    unittest.main()
