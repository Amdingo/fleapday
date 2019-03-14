## To run flask api application:

### Using Docker:
**build the container:**

`docker build -t fleapday -f Dockerfile`

**run the container, binding container port 5000 to your preferred local port:**

`docker run -p 5000:5000 -d fleapday`

Access the running container on http://127.0.0.1:5000 (or `docker-machine ip <machine>`)

### Locally using virtualenv or pipenv

`virtualenv venv` or `pipenv install -r requirements.txt`

#### If using virtualenv
- **Windows:** `venv\Scripts\activate`
- **macOS / linux:** `. venv/bin/activate`

#### if using pipenv
`pipenv shell`

#### using cli commands with the flask application
Much like with the `cli` folder application, you can run any command from the cli within the flask folder also, utilizing `python manage.py <function> <arg>` e.g. `python manage.py gld 1984`

To start the API server, run `python manage.py run` and open a browser to http://127.0.0.1:5000.

valid routes include:
* `/ping`: health check
* `/is-leap-year/<year>`: will verify that the provided year is in fact a leap year
* `/get-all-leap-years`: returns a list of leap years between 1752 and 2019
* `/get-leap-day/<year>`: checks if the provided `<year>` is a leap year, if so returns a human readable day of the week for `02-29-<year>`
