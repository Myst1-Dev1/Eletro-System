/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { AuthGuard } from "@/components/AuthGuard";
import { useUserStore } from "@/stores/useUserStore";
import { Offers } from "../Offers";
import { KnowOurProducts } from "../KnowOurProducts";

interface ReserveToClientProps {
    products: any;
}

export function ReserveToClient({ products }: ReserveToClientProps) {
    const { isLogged } = useUserStore();

    console.log(isLogged);

    return (
        <>
            {isLogged === false ? <AuthGuard />
            :
            <>
                <Offers products={products} />
                <KnowOurProducts products={products} />
            </>
            }
        </>
    )
}