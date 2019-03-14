from flask import Blueprint, jsonify

from .utils import get_all_leap_years as galy,\
    get_leap_day as gld,\
    is_leap_year as ily

year_blueprint = Blueprint('year', __name__)


@year_blueprint.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })


@year_blueprint.route('/is-leap-year/<year>', methods=['GET'])
def is_leap_year(year):
    response_object = {
        'status': 'fail',
        'message': f'{year} is not a leap year'
    }
    try:
        ly = ily(year)
        if not ly:
            return jsonify(response_object), 404
        else:
            response_object = {
                'status': 'success',
                'message': f'{year} is a leap year'
            }
            return jsonify(response_object), 200
    except ValueError:
        response_object = {
            'status': 'fail',
            'message': ValueError
        }
        return jsonify(response_object), 404


@year_blueprint.route('/get-leap-day/<year>', methods=['GET'])
def get_leap_day(year):
    response_object = {
        'status': 'fail',
        'message': f'{year} is not a leap year.  Check /get-all-leap-years'
    },
    try:
        ld = gld(year)
        if not ld:
            return jsonify(response_object), 404
        else:
            response_object = {
                'status': 'success',
                'data': {
                    'leap_day': ld
                }
            }
            return jsonify(response_object), 200
    except ValueError:
        response_object = {
            'status': 'fail',
            'message': 'year must be 4 digits'
        }
        return jsonify(response_object), 404


@year_blueprint.route('/get-all-leap-years')
def get_all_leap_years():
    response_object = {
        'status': 'success',
        'data': {
            'leap_years': [year for year in galy()]
        }
    }
    return jsonify(response_object), 200
