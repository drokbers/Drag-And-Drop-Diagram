// submit.js

import axios from "axios";
import { toast } from "react-toastify";
import { useStore } from "../../store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  console.log(nodes, "node", edges, "edge");

  const submitHandler = async () => {
    try {
      console.log(nodes, edges);
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:5000/pipelines/parse",
        data: {
          nodes: nodes,
          edges: edges,
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      });

      /*.post('http://127.0.0.1:5000/pipelines/parse', {
        nodes: nodes,
        edges: edges,
      });*/
      console.log(response.data);
      const message = `Nodes: ${response.data.num_nodes},  Edges: ${response.data.num_edges}, Is DAG: ${response.data.is_dag}`;
      const notify = () => toast.info(message);
      

      notify();
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <div className="absolute justify-center  z-10 top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex  hover:bg-indigo-500  items-center w-24 h-10 rounded-lg bg-primary">
      <button
        onClick={submitHandler}
        className="font-medium  text-white items-center text-xl"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
