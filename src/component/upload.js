import React from 'react';

export const Upload = () => {
    return (
        <form method="POST" encType="multipart/form-data" action="monupload">
            <input type="file" name="photos" accept="image/png" multiple />
            <button> Send </button>
        </form>
    )
}