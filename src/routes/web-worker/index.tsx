import { $, component$, useRef, useStore } from '@builder.io/qwik';

import { ButtonSlot } from "~/components/Buttons/ButtonSlot";
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    const store = useStore({ dataList: [], loading: false, numRows: 100 });
    const inputRef = useRef<HTMLInputElement>(null)

    const increase = $(() => {
        store.loading = true

        if (window.Worker) {
            const workerScriptURL = new URL('./components/workers/web-worker.js', import.meta.url)
            const worker = new Worker(workerScriptURL)
            worker.postMessage({ numRows: store.numRows })

            worker.onmessage = (evt: MessageEvent<any>) => {
                store.loading = false
                store.dataList = evt.data
            }
        }

    })

    const updateNumRows = $(() => store.numRows = Number(inputRef.current?.value))

    return (
        <div>
            <h1>Qwik Web Workers generate tables in {store.numRows} rows</h1>
            <div>
                <label>numRows:</label>
                <input type="number" class="p-1 border-3" ref={inputRef} onChange$={updateNumRows} value={store.numRows}/> rows.
            </div>
            
            {store.loading && store.dataList.length <= 0 ?
                <div>Loading Data....</div> :
                <div class="h-4/6 overflow-scroll border-3">
                    <ul>
                        {store.dataList.map(m => <li>{JSON.stringify(m)}</li>)}
                    </ul>
                    {/* dataList: {JSON.stringify(store.dataList)}  */}
                </div>
            }
            <ButtonSlot onClick$={increase}>
                Dump Table with Web Worker
            </ButtonSlot>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Qwik Web Worker ",
};
