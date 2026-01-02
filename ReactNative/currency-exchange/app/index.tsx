import {Button, Text, View} from "react-native";
import {Container} from "react-bootstrap";
import React from "react";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import CoinsTable from "@/app/components/coins-table";


async function fetchCoins(page: number = 0, limit: number = 10) {
    const response = await fetch(`https://openapiv1.coinstats.app/coins?limit=${limit}&page=${page}`, {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '0XwvnLcK5BTI6w6VBJLwAsRd7SDe6YJnqxKB5LPmSME='
        }
    });

    if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
    }

    const result = await response.json();

    return result.result;
}


export default function Index() {
    const [page, setPage] = React.useState(1);
    const {data, isLoading, isError, error, isPlaceholderData} = useQuery({
        queryKey: ['coins', page],
        queryFn: () => fetchCoins(page),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: true,
    });

    console.log(data, isLoading, isError);

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                <Text>Error: {isError}</Text>
            </View>
        );
    }

    if (data.length === 0) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                <Text>No coins available.</Text>
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CoinsTable data={data}/>

            <View style={{flexDirection: "row", alignItems: "center", marginTop: 20, gap: 10}}>
                <Button title="Previous Page" onPress={() => setPage((old) => Math.max(old - 1, 1))}
                        disabled={page === 1}/>
                <Text>Page {page}</Text>
                <Button title="Next Page" onPress={() => setPage((old) => old + 1)}/>
            </View>
        </View>
    );
}
