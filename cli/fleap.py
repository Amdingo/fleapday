import click
import utils


@click.command()
@click.option('--year', default=1984, help='A year expressed in four-digit form')
def ily(year):
    """Checks if a year is a leap year or not"""
    print(f"{year} is a leap year!" if utils.is_leap_year(year) else f"{year} is not a leap year :(")


@click.command()
def galy():
    """Returns all leap years from 1752 to a specified --max-year or 2020"""
    click.echo(utils.get_all_leap_years())


@click.command()
@click.option('--year', default=1984, help='A year expressed in four-digit form')
def gld(year):
    ld = utils.get_leap_day(year)
    click.echo(f"In the year {year}, leap day is on a {ld}")
