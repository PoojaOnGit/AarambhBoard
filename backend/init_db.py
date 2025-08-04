from db_connection import Base, engine
from models.dashboard import Dashboard

Base.metadata.create_all(bind=engine)
