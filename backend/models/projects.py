from sqlalchemy import Column, DateTime, String, Integer, func, Text
from sqlalchemy.orm import relationship

from backend.models import Base


class ProjectStatus(Base):
    __tablename__ = "project_status"

    id = Column(Integer, primary_key=True)
    name = Column(String(60), unique=True)


class Project(Base):
    __tablename__ = "project"

    id = Column(Integer, primary_key=True)
    name = Column(String(60), unique=True)
    location = Column(Text, nullable=True)

    status_id = Column(Integer, nullable=False)
    status = relationship("ProjectStatus", back_populates="projects")

    create_at = Column(DateTime, default=func.now())
    update_at = Column(DateTime, default=func.now())

    def __repr__(self):
        return f"id: {self.id}, name: {self.name}"
