from setuptools import setup
setup(
    name='ClickCLITest',
    version='0.1',
    py_modules=['fleap'],
    install_requires=[
        'Click'
    ],
    entry_points={
        'console_scripts':
            [
                'ily = fleap:ily',
                'galy = fleap:galy',
                'gld = fleap:gld'
            ]
    },
)
