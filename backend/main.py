from fastapi import FastAPI, HTTPException, Body
from typing import List, Dict
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str
    position: dict
    data: dict
    width: int
    height: int

class Edge(BaseModel):

    source: str
    target: str

@app.get('/')
def read_root():
    return "Hello World!"

@app.post('/pipelines/parse')
def parse_pipeline(nodes: List[Node], edges: List[Edge]):
    num_nodes = len(nodes)
    num_edges = len(edges)
    dag_check = is_dag(nodes, edges)
    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag_check}

def has_cycle(node, visited, rec_stack, edges_list):
    visited[node] = True
    rec_stack[node] = True
    for edge in edges_list:
        if edge.source == node:
            if not visited[edge.target]:
                if has_cycle(edge.target, visited, rec_stack, edges_list):
                    return True
            elif rec_stack[edge.target]:
                return True
    rec_stack[node] = False
    return False

def is_dag(nodes_list, edges_list):
    visited = {node.id: False for node in nodes_list}
    rec_stack = {node.id: False for node in nodes_list}
    for node in nodes_list:
        if not visited[node.id]:
            if has_cycle(node.id, visited, rec_stack, edges_list):
                return False
    return True

if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, log_level="info")
