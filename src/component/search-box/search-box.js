import { useEffect } from "react";
import { Form } from "react-router-dom";
import { useSubmit, Navigate } from "react-router-dom";

const SearchBox = () => {
  /*useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);*/

  /*const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.searching).has("q");*/

  const submit = useSubmit();

  return (
    <div>
      <Form id="search-form" role="search">
        <input
          id="q"
          //className={searching ? "loading" : ""}
          aria-label="Search"
          placeholder="Buscar"
          type="search"
          name="q"
          onChange={(event) => {
            //const isFirstSearch = q == null;
            /*submit(event.currentTarget.form, {
              replace: !isFirstSearch,
            });*/
            submit(event.currentTarget.form);
          }}
        />
        <div id="search-spinner" aria-hidden /*hidden={!searching}*/></div>
        <div className="sr-only" aria-live="polite"></div>
      </Form>
    </div>
  );
};

export default SearchBox;
