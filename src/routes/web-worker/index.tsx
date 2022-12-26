import { $, component$, useStore } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/Buttons';

export default component$(() => {
    const store = useStore({ dataList: [], loading: false });

    const increase = $(() => {
        store.loading = true

        if (window.Worker) {
            const workerScriptURL =  new URL('./components/workers/web-worker.js', import.meta.url)
            const worker = new Worker(workerScriptURL)
            worker.postMessage(store.dataList)

            worker.onmessage = (evt: MessageEvent<any>) => {
                store.loading = false
                store.dataList = evt.data
            }
        }

    })

    return (
        <div>
            <h1>Qwik Web Workers generate tables in {store.dataList.length} rows</h1>
            {store.loading && store.dataList.length <= 0 ?
                <div>Loading Data....</div> :
                <div>
                    dataList: {JSON.stringify(store.dataList)}
                </div>
            }
            <Button label="generate data list with web worker" onClick$={increase} />
        </div>
    );
});

export const head: DocumentHead = {
    title: "Qwik Web Worker ",
};
