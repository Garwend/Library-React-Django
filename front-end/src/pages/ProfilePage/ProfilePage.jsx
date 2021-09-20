import React from "react";
import BorrowedBooks from "../../components/BorrowedBooks/BorrowedBooks";

import './ProfilePage.css'

const ProfilePage = () => {
    return (
        <section className='borrowed-books-wrap'>
            <h1>Borrowed Books</h1>
            <BorrowedBooks />
        </section>

    )
}

export default ProfilePage;