import * as database from "../../database";
import { useDispatch } from "react-redux";
import LoadingWidget from "../LoadingWidget";
import { useEffect, useState } from "react";
import { loadBookList } from "../../redux/bookSlice";
import { setUser } from "../../redux/loginSlice";

export default function AppLoader() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const data = await database.load();
            const userData = await database.loadUsers();

            setIsLoading(false);

            dispatch(loadBookList(data));
            dispatch(setUser(userData));

        })();
    }, []);

    if (isLoading) {
        return (
            <LoadingWidget description={"Loading..."} />
        );
    }
}