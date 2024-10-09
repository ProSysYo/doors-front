"use client";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { decrement, increment } from "../lib/features/counter/counterSlice";

export default function Calculator() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className="container px-4 py-4 flex flex-col gap-2 items-center justify-center">
            <Card>
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-small text-default-500">{count}</p>
                    </div>
                </CardHeader>
                <CardFooter className="gap-3">
                    <Button color="primary" onClick={() => dispatch(increment())}>
                        Inc
                    </Button>
                    <Button color="primary" onClick={() => dispatch(decrement())}>
                        Dec
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
