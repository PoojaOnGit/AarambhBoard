from sqlalchemy import Column, Integer, String, JSON
from db_connection import Base

class Dashboard(Base):
    __tablename__ = "dashboards"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    config = Column(JSON)
