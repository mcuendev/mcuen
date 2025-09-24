"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { FormEvent, useEffect, useState } from "react";

const validation = {
  minYear: 500,
  maxYear: Number(new Date().getFullYear()),
};

const AddArtwork = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [author, setAuthor] = useState("");
  const [authorError, setAuthorError] = useState<string | null>(null);
  const [year, setYear] = useState("");
  const [yearError, setYearError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isNaN(Number(year))) {
      setYearError("Invalid year. Must be a valid number");
      return;
    }
    if (Number(year) % 1 !== 0) {
      setYearError("Invalid year. Must be an integer.");
      return;
    }
    if (Number(year) < validation.minYear) {
      setYearError(`Invalid year. Min ${validation.minYear}`);
      return;
    }
    if (Number(year) > validation.maxYear) {
      setYearError(`Invalid year. Max ${validation.maxYear}`);
      return;
    }

    setYearError(null);
  }, [year]);
  useEffect(() => {
    if (title.trim() === "") {
      setTitleError("Invalid title. Must not be empty");
      return;
    }

    setTitleError(null);
  }, [title]);
  useEffect(() => {
    if (author.trim() === "") {
      setAuthorError("Invalid author. Must not be empty");
      return;
    }

    setAuthorError(null);
  }, [author]);

  const generateUploadUrl = useMutation(
    api.artworks.mutations.generateUploadUrl,
  );
  const addArtwork = useMutation(api.artworks.mutations.addArtwork);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let storageId: Id<"_storage"> | undefined = undefined;

    if (file) {
      const uploadUrl = await generateUploadUrl();

      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const json = await result.json();
      storageId = json.storageId as Id<"_storage">;
    }

    if (!storageId) {
      console.error("Not storage id set properly");
      return;
    }

    await addArtwork({ title, author, year: Number(year), fileId: storageId });

    setTitle("");
    setAuthor("");
    setYear("");
    setFile(null);
    alert("Artwork creado");
  };

  return (
    <form className="p-4 space-y-4" onSubmit={handleSubmit}>
      <input
        className="border p-2 rounded-md w-full"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {titleError && <p className="text-red-500">{titleError}</p>}
      <input
        className="border p-2 rounded-md w-full"
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      {authorError && <p className="text-red-500">{authorError}</p>}
      <input
        className="border p-2 rounded-md w-full"
        type="number"
        min={validation.minYear}
        max={validation.maxYear}
        step={1}
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      {yearError && <p className="text-red-500">{yearError}</p>}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Subir
      </button>
    </form>
  );
};
export default AddArtwork;
