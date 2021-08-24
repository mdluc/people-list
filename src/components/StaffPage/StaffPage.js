import React from "react";
import Person from "../Person/Person";
import "./styles.css";
import "../Person/styles.css";
import $ from "jquery";

const StaffPage = ({ people }) => {
  $(document).ready(function () {
    var clicked = true;
    $(".centered").slice(0, 6).show();
    $("#loadmore").click(function (e) {
      e.preventDefault();
      if (clicked) {
        $(".centered:hidden").slice(0, 4).show(1000);
        $("#loadmore").html("Show Less");
        clicked = false;
      } else {
        $(".centered").slice(6).hide(1000);
        clicked = true;
        $("#loadmore").html("View Everyone");
      }
    });
  });

  return (
    <main>
      <div className="container">
        <div className="row">
          <h1>Our Staff</h1>
          {people.map((data) => {
            return (
              <section className="person">
                <article className="col-12 col-md-6 centered">
                  <Person key={data.id} {...data}></Person>
                </article>
              </section>
            );
          })}
          <button id="loadmore">View Everyone</button>
        </div>
      </div>
    </main>
  );
};

export default StaffPage;
