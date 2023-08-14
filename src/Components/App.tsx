import React from "react";
import { Board } from "./Board";
import { Canvas, Layout } from "./Canvas";

const App = () => {
  return (
    <Layout>
      <Canvas>
        <Board />
      </Canvas>
    </Layout>
  )
}

export default App
