import { useState } from "react";

export const useSearchGifs = () => {
  const [valorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kRTTaq2WlS1R3YnNrS73ONMArbAwJBiw&q=${query}`;

    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setLoading(false);
    return data.data;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  };

  return { onSubmit, onChange, valorInput, gifs, loading };
};
