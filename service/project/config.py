import os


class BaseConfig:
    """Base configuration"""
    TESTING = False
    SECRET_KEY = os.environ.get('SECRET_KEY')
    DEBUG_TB_ENABLED = False
    DEBUG_TB_INTERCEPT_REDIRECTS = False


class DevelopmentConfig(BaseConfig):
    """Development configuration"""
    DEBUG_TB_ENABLED = True


class TestingConfig(BaseConfig):
    """Testing configuration"""
    TESTING = True
