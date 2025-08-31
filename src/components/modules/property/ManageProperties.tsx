"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DeleteConfirmationModal from "@/components/ui/core/NMModal/DeleteConfirmationModal";
import { NMTable } from "@/components/ui/core/NMTable/index";
import TablePagination from "@/components/ui/core/NMTable/TablePagination";
import { useUser } from "@/context/UserContext";
import { deleteproperty } from "@/services/Property";
import { IProperty } from "@/types";
import { IMeta } from "@/types/meta";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import DiscountModal from "./DiscountModal";

const ManageProperties = ({
  properties,
  meta,
}: {
  properties: IProperty[];
  meta: IMeta;
}) => {
  const { user } = useUser();
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[] | []>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IProperty) => {
    // console.log(data);
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    const toastId = toast.loading("Property Deleting... ");
    try {
      if (selectedId) {
        const res = await deleteproperty(selectedId);
        // console.log(res);
        if (res.success) {
          toast.success("Property Deleted", { id: toastId });
          setModalOpen(false);
        } else {
          toast.error(res.message, { id: toastId });
        }
      }
    } catch (err) {
      toast.error(`Something went wrong ${err}`, { id: toastId });
    }
  };

  const columns: ColumnDef<IProperty>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          // checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && ("indeterminate" as CheckedState))}

          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            if (value) {
              setSelectedIds((prev) => [...prev, row.original._id]);
            } else {
              setSelectedIds(
                selectedIds.filter((id) => id !== row.original._id)
              );
            }
            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: "name",
      header: "Property Name",
      cell: ({ row }) => (
        <div className=" flex items-center space-x-3">
          <Image
            src={row.original.imageUrls[0]}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row?.original?.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "squareFeet",
      header: "Square Feet",
      cell: ({ row }) => <span>{row?.original?.squareFeet}</span>,
    },
    {
      accessorKey: "bedrooms",
      header: "Bedrooms",
      cell: ({ row }) => <span>{row?.original?.beds}</span>,
    },
    {
      accessorKey: "propertyType",
      header: "Property Type",
      cell: ({ row }) => <span>{row.original?.propertyType}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>$ {row.original?.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => (
        <span>
          {row.original.location
            ? `${row.original?.location?.city},${row?.original?.location?.country}`
            : "-"}
        </span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 cursor-pointer hover:text-green-500"
            title="Edit"
            onClick={() => {
              if (user?.role === "admin") {
                router.push(
                  `/admin/manage-property/update-property/${row?.original?._id}`
                );
              } else {
                router.push(
                  `/landlord/property/update-property/${row?.original?._id}`
                );
              }
            }}
          >
            <Edit className="w-8 h-8" />
          </button>

          <button
            className="text-red-500 cursor-pointer"
            title="Delete"
            onClick={() => handleDelete(row.original)}
          >
            <Trash className="w-8 h-8" />
          </button>
        </div>
      ),
    },
  ];

  // console.log("again here", meta);

  return (
    <div className="bg-white px-6 py-3 rounded">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Properties Overview</h2>
          <p className="text-sm text-gray-500">
            Manage and view all properties.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DiscountModal
            selectedIds={selectedIds}
            // setSelectedIds={setSelectedIds}
          />
        </div>
      </div>

      <hr className=" border-t border-input" />
      <NMTable columns={columns} data={properties || []} />
      <hr className=" border-t border-input" />
      <TablePagination totalPage={meta?.totalPage} />
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageProperties;
