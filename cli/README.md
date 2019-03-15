### To run CLI application:

`virtualenv venv`
- **Windows:** `venv\Scripts\activate`
- **macOS / linux:** `. venv/bin/activate`

`pip install --editable .`

### Functions
`galy`

provides all leap years from 1752 to 2020

`ily --year <year>` or `ily -y <year>`

Checks if the supplied year is a leap year

`gld --year <year>` or `gld -y <year>`
Provides the day of the week that `02-29-<year>` falls on
