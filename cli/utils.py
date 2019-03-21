import datetime
"""
https://en.wikipedia.org/wiki/Leap_year#Algorithm

The following pseudocode determines whether a year is a leap year or a common
year in the Gregorian calendar (and in the proleptic Gregorian calendar
before 1582). The year variable being tested is the integer representing the
number of the year in the Gregorian calendar.

if (year is not divisible by 4) then (it is a common year)
 - year % 4 == 0
else if (year is not divisible by 100) then (it is a leap year)
 - year % 100 != 0
else if (year is not divisible by 400) then (it is a common year)
 - year % 400 == 0
else (it is a leap year)
"""


def is_leap_year(year):
    # verify that we're getting the input we want
    if len(str(year)) != 4:
        raise ValueError("Year should be 4 digits exactly (e.g. 1984)")
    # convert to int in case we accidentally receive a string
    year = int(year)
    # math per docstring
    if year % 4 == 0 and ((year % 100 != 0) or (year % 400 == 0)):
        return True
    else:
        return False

# The first leap year in the modern sense in Britain was 1752, when 11 days
# were 'lost' from the month September with the adoption of the Gregorian
# calendar by Britain and her colonies.


def get_all_leap_years():
    first_leap = 1752
    current_year = 2019
    leaps = []
    for year in range(first_leap, current_year):
        if is_leap_year(str(year)):
            leaps.append(year)
    return leaps


def get_leap_day(year):
    # provide human readable values
    week = ['Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday']
    try:
        # check if the provided year is a leap year
        ly = is_leap_year(year)
        if not ly:
            return False
        # use datetime to get back day of week that 2/29 falls on
        ld = datetime.datetime(int(year), 2, 29).weekday()
        # return the human readable value
        return week[ld]
    except ValueError:
        raise
