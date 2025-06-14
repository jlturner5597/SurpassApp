from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    surpass_user: str
    surpass_pass: str

     # tell Pydantic where to load env vars
    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()
