from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from db_connection import SessionLocal
from models.dashboard import Dashboard

router = APIRouter()

class DashboardSchema(BaseModel):
    user_id: str
    config: dict

@router.post("/dashboard/save")
async def save_dashboard(data: DashboardSchema):
    db: Session = SessionLocal()
    dashboard = Dashboard(user_id=data.user_id, config=data.config)
    db.add(dashboard)
    db.commit()
    db.refresh(dashboard)
    return {"message": "Dashboard saved", "id": dashboard.id}

@router.get("/dashboard/load/{user_id}")
async def load_dashboard(user_id: str):
    db: Session = SessionLocal()
    dashboard = db.query(Dashboard).filter(Dashboard.user_id == user_id).first()
    if not dashboard:
        raise HTTPException(status_code=404, detail="Dashboard not found")
    return {"user_id": dashboard.user_id, "config": dashboard.config}




