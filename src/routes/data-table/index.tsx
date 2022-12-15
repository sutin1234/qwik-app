import { $, component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import DataTable from "~/components/data-tables/DataTable";
import { IData, IHeader } from '../../interfaces/data-tables.interface';

export default component$(() => {
    const range = (size: number, startAt = 0) => {
        return [...Array(size).keys()].map(i => i + startAt);
    }
    const store = useStore({ count: 0 });
    const headers: IHeader[] = [
        { key: 'firstName', columns: 'firstName' },
        { key: 'lastName', columns: 'firstName' },
        { key: 'age', columns: 'age', editable: true },
        { key: 'sex', columns: 'sex', editable: true },
        { key: 'tall', columns: 'sex', editable: true },
    ]
    const data: IData[] = [

    ]

    for (const i in range(2000, 1)) {
        data.push({ firstName: 'Sutin', lastName: 'Injitt', age: '30', sex: 'Male', tall: '165' })
    }

    const renderRows = $(() => {
        for (const i in range(100, 1)) {
            data.push({ firstName: 'Sutin', lastName: 'Injitt', age: '30', sex: 'Male', tall: '165' })
        }
        store.count = data.length
    })

    return (
        <div class="p-2">
            <h1 class="text-4xl">Qwik Data Tables Input</h1>
            {/* <button onClick$={renderRows}> render table</button> */}
            <DataTable headers={headers} data={data} />
        </div>
    );
});

export const head: DocumentHead = {
    title: "Qwik DataTables Editable",
};
