import { $, component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Buttons/Button";
import DataTable from "~/components/data-tables/DataTable";
import { IData, IHeader } from '~/interfaces/data-tables.interface';

export default component$(() => {

    const range = (size: number, startAt = 0) => {
        return [...Array(size).keys()].map(i => i + startAt);
    }


    const store = useStore({ count: 0, data: [] });
    const headers: IHeader[] = [
        { key: 'firstName', columns: 'firstName' },
        { key: 'lastName', columns: 'firstName' },
        { key: 'age', columns: 'age', editable: true },
        { key: 'sex', columns: 'sex', editable: true },
        { key: 'tall', columns: 'sex', editable: true },
    ]
    const data: IData[] = [

    ]

    for (const i in range(200, 1)) {
        data.push({ index: i, firstName: 'Sutin', lastName: 'Injitt', age: '30', sex: 'Male', tall: '165' })
    }
    const addData = $(() => store.data = data as never[])

    return (
        <div class="p-2">
            <h1 class="text-4xl">Qwik Data Tables Input</h1>
            <Button onClick$={addData} label="render Table" />
            {store.data.length ? (<DataTable headers={headers} data={store.data} />) : ''}
        </div>
    );
});

export const head: DocumentHead = {
    title: "Qwik DataTables Editable",
};
