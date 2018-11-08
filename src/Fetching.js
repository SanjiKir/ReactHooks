import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Fetching() {
  const RenderComponent = useApiFetch();

  return RenderComponent;
}

export function useApiFetch() {
  const [RenderComponent, setComponent] = useState("Loading");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => setComponent("Success"))
      .catch(error => setComponent("Error"));
  });
  return RenderComponent;
}
