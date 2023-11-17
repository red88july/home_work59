    import React, { useState } from 'react';
    import MovieItem from './MovieItem';
    import { Movies } from '../../types';

    interface Props {
        onSubmit: (movie: Movies) => void;
    }

    const MovieForm: React.FC<Props> = ({ onSubmit }) => {
        const [moviesList, setMoviesList] = useState<Movies[]>([]);
        const [movie, setMovie] = useState<Movies>({
            id: '',
            name: ''
        });

        const randomId = `${Date.now()}`;
        const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setMovie((prevState) => ({
                ...prevState,
                id: randomId,
                name: e.target.value }));
        };

        const onFormSubmit = (e:React.FormEvent) => {
            e.preventDefault();
            if (movie.name !== '') {
                onSubmit({
                    ...movie
                })
                setMoviesList((prevState) => [...prevState, movie]);
                setMovie({id: '', name: ''});
            } else {
                alert(`Set correct value`);
            }

        };

      const handleUpdate = (id: string, newName: string) => {
        setMoviesList((prevState) => prevState.map((movie) =>
            (movie.id === id ? { ...movie, name: newName } : movie))
        );
      };

      const handleDelete = (id: string) => {
        setMoviesList((prevState) => prevState.filter((movie) => movie.id !== id));
      };


        return (
            <>
                <form onSubmit={onFormSubmit}>
                    <div className="mt-3 mb-1 d-flex align-items-center">
                        <input
                            type="text"
                            name="name"
                            value={movie.name}
                            onChange={inputChange}
                            className="form-control"
                            placeholder="Add your favorite movie"
                        />
                        <button type="submit" className="btn btn-primary ms-2">
                            Add
                        </button>
                    </div>
                </form>
                <div className="mt-1 mb-1">To watch list:</div>
                {moviesList.map((items) => (
                    <MovieItem
                        key={items.id}
                        id={items.id}
                        name={items.name}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate} />
                ))}
            </>
        );
    };

    export default MovieForm;

