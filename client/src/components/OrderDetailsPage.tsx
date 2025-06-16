import { IndianRupee } from "lucide-react";
import { Separator } from "./ui/separator";
import { useOrderStore } from "@/store/useOrderStore";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "./ui/button";
// import { CartItem } from "@/types/cartType";

const OrderDetailsPage = () => {
  const { orderDetails, getSingleOrderDetails } = useOrderStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleOrderDetails(id);
    }
  }, [id]);

  if (!orderDetails)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">
          Order not found!
        </h1>
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-2 text-center">
          Order ID: #{orderDetails._id}
        </h2>

        <div className="text-center mb-4">
          <span className="text-md font-semibold text-gray-600 dark:text-gray-300">
            Status:{" "}
          </span>
          <span className="text-[#FF5A5A] font-bold uppercase">
            {orderDetails.status}
          </span>
        </div>

        <Separator className="my-4" />

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Delivery Details</h3>
          <p>Name: {orderDetails.deliveryDetails?.name}</p>
          <p>Email: {orderDetails.deliveryDetails?.email}</p>
          <p>Address: {orderDetails.deliveryDetails?.address}, {orderDetails.deliveryDetails?.city}</p>
        </div>

        <Separator className="my-4" />

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Ordered Items</h3>

          {orderDetails.cartItems.map(
            (
              item: {
                menuId: string;
                name: string;
                image: string;
                price: string;
                quantity: string;
              },
              index: number
            ) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt=""
                      className="w-14 h-14 rounded-md object-cover"
                    />
                    <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                      {item.name}
                    </h3>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-800 dark:text-gray-200 flex items-center">
                      <span className="text-lg font-medium">Count: {Number(item.quantity)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-800 dark:text-gray-200 flex items-center">
                      <IndianRupee />
                      <span className="text-lg font-medium">{Number(item.price) * Number(item.quantity)}</span>
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
              </div>
            )
          )}
        </div>

        <Link to="/">
          <Button className="bg-orange hover:bg-hoverOrange w-full py-3 rounded-md">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
