from pydantic import BaseSettings

class Settings(BaseSettings):
    surpass_user: str
    surpass_pass: str

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'
        env_prefix = ''

settings = Settings()
