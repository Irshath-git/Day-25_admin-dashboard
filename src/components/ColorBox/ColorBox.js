import React from "react";

function ColorBox({ data }) {
  return (
    <>
      <div class="col-lg-6 mb-4">
        <div
          class={
            data.ishighlight
              ? `card bg-${data.color} text-${data.bg} shadow`
              : `card bg-${data.color} text-white shadow`
          }
        >
          <div class="card-body">
            {data.title}
            <div class="text-white-50 small">{data.colorcode}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorBox;
