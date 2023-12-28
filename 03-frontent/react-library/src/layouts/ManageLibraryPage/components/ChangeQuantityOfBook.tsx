import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";

export const ChangeQuantityOfBook: React.FC<{book: BookModel}> = (props, key) => {

    const [quantity, setQuantity] = useState<number>(0);
    const [remaining, setRemaining] = useState<number>(0);

    useEffect(() => {
        const fetchBookInState = () => {
            props.book.copies ? setQuantity(props.book.copies) : setQuantity(0);
            props.book.copiesAvailable ? setRemaining(props.book.copiesAvailable) : setRemaining(0);
        }
        fetchBookInState();
    }, []);

    return(<div>

        
    </div>);
} 

