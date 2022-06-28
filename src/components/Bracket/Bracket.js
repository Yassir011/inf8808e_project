import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";
import _, { map } from "underscore";

function Bracket(props) {
  const ref = useRef();
  const [bracketData, setData] = useState({});
  const [team, setTeam] = useState("");

  const width = 600,
    height = 600,
    labelHeight = 50,
    labelWidth = 120;

  useEffect(() => {
    if (_.isEqual(props.data, bracketData)) {
      return;
    } else {
      setData(props.data);
    }

    if (_.isEqual(props.teamSelected, team)) {
      return;
    } else {
      setTeam(props.teamSelected);
    }

    d3.select(ref.current).selectAll("*").remove();

    // append the svg object to the body of the page
    var svg = d3
      .select(ref.current)
      .attr("width", width + 500)
      .attr("height", height + 200)
      .append("g")
      .attr("transform", "translate(200,0)"); // bit of margin on the left = 40

    // Create the cluster layout:
    var cluster = d3.cluster().size([height, width - 25]); // 100 is the margin I will have on the right side

    // Give the data to this cluster layout:
    var root = d3.hierarchy(props.data, function (d) {
      return d.children;
    });

    cluster(root);

    // Add the links between nodes:
    svg
      .selectAll("path")
      .data(root.descendants().slice(1))
      .enter()
      .append("path")
      .attr("d", function (d) {
        return (
          "M" +
          (width - d.y) +
          "," +
          d.x +
          " " +
          (width - d.parent.y) +
          "," +
          d.x +
          " " +
          (width - d.parent.y) +
          "," +
          d.parent.x + // 50 and 150 are coordinates of inflexion, play with it to change links shape
          " " +
          (width - d.parent.y) +
          "," +
          d.parent.x
        );
      })
      .style("fill", "none")
      .attr("stroke", "#A3A6A8");

    // Add a circle for each node.
    var node = svg
      .selectAll("g")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("transform", function (d) {
        return "translate(" + (width - d.y - 80) + "," + (d.x - 25) + ")";
      });

    node
      .append("rect")
      .attr("height", labelHeight)
      .attr("width", labelWidth + 15)
      .style("fill", "white")
      .attr("stroke", "black")
      .attr("transform", function (d) {
        return "translate(0, -1)";
      })
      .style("stroke-width", 2);

    node
      .append("text")
      .attr("dx", -(labelWidth / 2) + 65)
      .attr("dy", labelHeight / 2 - 12)
      .attr("text-anchor", "start")
      .style("font-size", "10px")
      .style("font-weight", function (d) {
        return d.data.a === props.teamSelected ? 1000 : 500;
      })
      .style("fill", function (d) {
        return d.data.a === props.teamSelected ? "darkOrange" : "black";
      })
      .text(function (d) {
        return `${d.data.a} : ${d.data.aScore}`;
      });

    node
      .append("text")
      .attr("dx", -(labelWidth / 2) + 65)
      .attr("dy", labelHeight - 12)
      .attr("text-anchor", "start")
      .style("font-size", "10px")
      .style("font-weight", function (d) {
        return d.data.b === props.teamSelected ? 1000 : 500;
      })
      .style("fill", function (d) {
        return d.data.b === props.teamSelected ? "darkOrange" : "black";
      })
      .text(function (d) {
        return `${d.data.b} : ${d.data.bScore}`;
      });

    return;
  }, [props.data]);

  return (
    <div id="container">
      <svg ref={ref}></svg>
    </div>
  );
}

export default Bracket;
