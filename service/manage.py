import unittest

import click
import coverage as coverage
from flask.cli import FlaskGroup

from project import create_app
from project.api import utils

COV = coverage.coverage(
    branch=True,
    include='project/*',
    omit=[
        'project/tests/*',
        'project/config.py',
    ]
)
COV.start()

app = create_app()
cli = FlaskGroup(create_app=create_app)


@cli.command()
@click.argument('year')
def ily(year):
    """Checks if the supplied year is a leap year"""
    res = f"{year} is a leap year!" \
        if utils.is_leap_year(year) \
        else f"{year} is not a leap year :("
    print(res)


@cli.command()
def galy():
    print(utils.get_all_leap_years())


@cli.command()
@click.argument('year')
def gld(year):
    ld = utils.get_leap_day(year)
    print(f"In the year {year}, leap day is on a {ld}")


@cli.command()
def test():
    """Runs the tests without code coverage"""
    tests = unittest.TestLoader().discover('project/tests', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


@cli.command()
def cov():
    """Runs the unit tests with coverage."""
    tests = unittest.TestLoader().discover('project/tests')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        COV.stop()
        COV.save()
        print('Coverage Summary:')
        COV.report()
        COV.html_report()
        COV.erase()
        return 0
    return 1


if __name__ == '__main__':
    cli()
