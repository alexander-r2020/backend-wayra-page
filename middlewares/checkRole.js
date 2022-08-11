const httpStatus = require('../helpers/httpStatus');
const generaToken = require('../helpers/generateToken');

class CheckRoleId {

  static async isAdmin(req, res, next) {

    const user = await getDataBearer(req.headers.authorization);
    if (!user) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({
          msg: 'Access denied, token expire or incorrect',
        });
    } else {
      if (user.role !== 'admin') {
        res
          .status(httpStatus.UNAUTHORIZED)
          .json({
            msg: 'Access denied, you do not have authorization to enter',
          });
      } else {
        next();
      }
    }
  }
  
}
async function getDataBearer(bearer) {
  const accessToken = (bearer !== undefined ? bearer : '').replace('Bearer ', '');

  const data = generaToken.verifyToken(accessToken);

  return data
}

module.exports = CheckRoleId