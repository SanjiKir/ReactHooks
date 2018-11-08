import React, { useEffect, useState } from "react";
import useApiFetch from "./Fetching";

export default function Fetching() {
  const RenderComponent = useApiFetch();

  return RenderComponent;
}
