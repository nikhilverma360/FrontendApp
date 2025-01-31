import React, { useEffect, useState } from "react";

const NFTs = () => {
    let [users, setUsers] = useState([]);

    const getNfts = async () => {
        fetch(
            "https://api.nftport.xyz/v0/accounts/0x33942C2eDA77EB45B8420F86E9f2f8d97f127883?chain=polygon&include=metadata",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "42ec3f01-50a1-4d70-ab64-68582bcff6e2",
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.nfts);
                setUsers(data.nfts);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getNfts();
    }, []);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="flex flex-wrap -m-4">
                    {users.map((currlem) => {
                        if (currlem.file_url != "") {
                            return (
                                <div className="p-4 lg:w-1/4 md:w-1/2">
                                    <div className="h-full flex flex-col items-center text-center">
                                        <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" key={currlem.token_id} src={currlem.file_url} />
                                        <div className="w-full">
                                            <h2 className="title-font font-medium text-lg text-gray-900" key={currlem.token_id}>{currlem.name}</h2>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </section>
        </>
    );
};

export default NFTs;