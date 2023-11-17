import React from 'react';

interface Props {
  id: string;
  name: string;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newName: string) => void;
}

const MemoMovieItem: React.FC<Props> = React.memo(function MovieItem({ id, name, onDelete, onUpdate }) {
  const [editName, setEditName] = React.useState(name);

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(event.target.value);
  };

  const handleUpdate = () => {
    onUpdate(id, editName);
  };

  const deleteElement = () => {
    onDelete(id);
  };

  return (
    <div className="mb-3 d-flex align-items-center" id={id}>
      <input
        type="text"
        className="form-control"
        value={editName}
        onChange={inputChange}
        onBlur={handleUpdate}
      />
      <button type="button" className="btn btn-close ms-2" onClick={deleteElement} />

    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
});

export default MemoMovieItem;

