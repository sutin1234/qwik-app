import { component$, useStore } from "@builder.io/qwik";
import { IDataTableProps } from "~/interfaces/data-tables.interface";


export default component$((props: IDataTableProps) => {
    const store = useStore({ count: 0 });
    const renderNum = store.count = props.data.length
    return (
        <div class="p-2">
            <h4>render data table of {renderNum} rows</h4>
            <table>
                <tr>
                    {props.headers.map(header => (
                        <th class="p-1">{header.columns}</th>
                    ))}
                </tr>
                {props.data.map((data: any) => (
                    <tr>
                        {props.headers.map(h => (
                            h.editable ?
                                <td><input class="border-2 border-blue-200" type="text" value={data[h.key]} /></td> :
                                <td>{data[h.key]}</td>
                        ))}
                    </tr>

                ))}
                <tr>

                </tr>

            </table>
        </div>
    );
});
