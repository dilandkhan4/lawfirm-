"use client";
import React, { useState, useRef, useEffect } from "react";


export default function ClientFilesPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState("");
  const [caseProgress, setCaseProgress] = useState({});
  const fileInputRef = useRef();


  // Fetch files from API
  useEffect(() => {
    fetch('/api/client-files/list')
      .then(res => res.json())
      .then(data => setFiles(data.map(f => ({
        id: f.id,
        name: f.title,
        date: new Date(f.uploadedAt).toLocaleString(),
        url: f.url
      }))));
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    setUploadProgress(0);
  const formData = new FormData();
  formData.append('file', selectedFile);
  if (selectedCase) formData.append('caseId', selectedCase);
    const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/client-files/upload', true);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        setUploadProgress(Math.round((e.loaded / e.total) * 100));
      }
    };
    xhr.onload = function () {
      setUploading(false);
      setUploadProgress(100);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      // Refresh file list
      fetch('/api/client-files/list')
        .then(res => res.json())
        .then(data => setFiles(data.map(f => ({
          name: f.title,
          date: new Date(f.uploadedAt).toLocaleString(),
          url: f.url
        }))));
    };
    xhr.onerror = function () {
      setUploading(false);
      alert('Upload failed.');
    };
    xhr.send(formData);
  };

  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase()) &&
    (!filterCase || f.caseId === parseInt(filterCase))
  );

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[#B68C5A]">Client File Management & Case Progress</h1>
      <section className="mb-8 p-4 border rounded-lg bg-[#f9f6f2]">
        <h2 className="text-xl font-semibold mb-2 text-[#B68C5A]">Upload Files</h2>
        <div className="mb-2">
          <label className="mr-2">Assign to Case:</label>
          <select value={selectedCase} onChange={e => setSelectedCase(e.target.value)} className="border rounded px-2 py-1">
            <option value="">Select a case</option>
            {cases.map(c => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="mb-2" />
        <button
          onClick={handleUpload}
          disabled={uploading || !selectedFile}
          className="ml-2 px-4 py-2 bg-[#B68C5A] text-white rounded disabled:opacity-50"
        >
          {uploading ? `Uploading... (${uploadProgress}%)` : "Upload"}
        </button>
        {uploading && <div className="mt-2 w-full bg-gray-200 rounded h-2"><div className="bg-[#B68C5A] h-2 rounded" style={{ width: `${uploadProgress}%` }}></div></div>}
      </section>
      <section className="mb-8 p-4 border rounded-lg bg-[#f9f6f2]">
        <h2 className="text-xl font-semibold mb-2 text-[#B68C5A]">Search & View Files</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search files..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-2 md:mb-0 w-full border rounded px-3 py-2"
          />
          <select value={filterCase} onChange={e => setFilterCase(e.target.value)} className="w-full md:w-60 border rounded px-2 py-2">
            <option value="">All Cases</option>
            {cases.map(c => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
        <ul className="space-y-2">
          {filteredFiles.length === 0 && <li className="text-gray-500">No files found.</li>}
          {filteredFiles.map((file, idx) => (
            <li key={file.id} className="flex justify-between items-center bg-white p-2 rounded border">
              <div className="flex items-center space-x-2">
                <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-[#B68C5A] underline">{file.name}</a>
                <span className="text-xs text-gray-400">{file.date}</span>
              </div>
              <button
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={async () => {
                  if (window.confirm('Delete this file?')) {
                    await fetch(`/api/client-files/delete?id=${file.id}`, { method: 'DELETE' });
                    // Refresh file list
                    fetch('/api/client-files/list')
                      .then(res => res.json())
                      .then(data => setFiles(data.map(f => ({
                        id: f.id,
                        name: f.title,
                        date: new Date(f.uploadedAt).toLocaleString(),
                        url: f.url
                      }))));
                  }
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="p-4 border rounded-lg bg-[#f9f6f2]">
        <h2 className="text-xl font-semibold mb-2 text-[#B68C5A]">Case Progress</h2>
        {/* Example progress tracker, replace with real data */}
        <div className="space-y-2">
          <div>
            <span className="font-medium">Case #12345:</span>
            <span className="ml-2">In Progress</span>
            <div className="w-full bg-gray-200 rounded h-2 mt-1">
              <div className="bg-[#B68C5A] h-2 rounded" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div>
            <span className="font-medium">Case #67890:</span>
            <span className="ml-2">Completed</span>
            <div className="w-full bg-gray-200 rounded h-2 mt-1">
              <div className="bg-[#B68C5A] h-2 rounded" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
